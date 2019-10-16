export interface IButton {
    disabled?: boolean;
    type?: string;

    onClick?(): void;
}