"use client";

import { chat } from "@/ai/flows/chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowUp, Bot, Loader2, MessageSquare, X } from "lucide-react";
import { FormEvent, useRef, useState, useEffect } from "react";

type Message = {
    role: 'user' | 'model';
    content: string;
};

const defaultWelcomeMessage: Message = {
    role: 'model',
    content: "Welcome to Connectify! Before we get started, could you please tell me your first name?"
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([defaultWelcomeMessage]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setIsLoading(true);
        const userMessage: Message = { role: 'user', content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");

        try {
            const result = await chat({
                message: input,
                history: messages
            });
            const botMessage: Message = { role: 'model', content: result.response };
            setMessages([...newMessages, botMessage]);
        } catch (error) {
            console.error("Error chatting with bot:", error);
            const errorMessage: Message = { role: 'model', content: "Sorry, I'm having trouble connecting. Please try again later." };
            setMessages([...newMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleOpen = () => {
        setIsOpen(true);
        if(messages.length === 0) {
            setMessages([defaultWelcomeMessage]);
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen ? (
                <Card className="w-80 h-[28rem] flex flex-col shadow-2xl">
                    <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-2">
                             <div className="bg-primary p-2 rounded-full">
                                <Bot className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <CardTitle className="text-lg">Connectify Assistant</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                            <X className="h-5 w-5" />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                       <div ref={messagesEndRef} />
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex items-start gap-3",
                                    message.role === 'user' ? "justify-end" : "justify-start"
                                )}
                            >
                                {message.role === 'model' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                                <div
                                    className={cn(
                                        "p-3 rounded-lg max-w-[80%]",
                                        message.role === 'user'
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary text-secondary-foreground"
                                    )}
                                >
                                    <p className="text-sm">{message.content}</p>
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex items-center gap-3">
                                <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                                <div className="bg-secondary p-3 rounded-lg">
                                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <div className="p-4 border-t">
                        <form onSubmit={handleSubmit} className="flex items-center gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                className="flex-1"
                                disabled={isLoading}
                            />
                            <Button type="submit" size="icon" disabled={isLoading}>
                                <ArrowUp className="h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                </Card>
            ) : (
                <Button
                    size="lg"
                    className="rounded-full w-16 h-16 shadow-lg"
                    onClick={handleOpen}
                >
                    <MessageSquare className="h-8 w-8" />
                </Button>
            )}
        </div>
    );
}
