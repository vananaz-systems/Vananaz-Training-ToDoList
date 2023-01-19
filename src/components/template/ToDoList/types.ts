export type ToDoListTProps = {
    toLogIn: () => void;
}
export type ToDoListTHeaderProps = {
    toLogIn: () => void;
    back?: boolean;
    type?: "search"|"select"|"add"|"update";
    toBack: () =>void;
}
export type ToDoListInputProps = {
    hide: boolean;
    value: string;
    type?: "search"|"select"|"add"|"update";
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}