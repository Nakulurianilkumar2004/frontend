"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "9392832240"; // 🔥 replace your number

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() =>
                    window.open(`https://wa.me/${phoneNumber}`, "_blank")
                }
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
            >
                <MessageCircle className="w-6 h-6" />
            </button>
        </div>
    );
}