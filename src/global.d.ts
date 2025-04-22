declare global {
    interface Window {
        __TOMORROW__?: {
            renderWidget: () => void;
        };
    }
}

export {};
