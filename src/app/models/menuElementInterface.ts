export interface MenuElement {
    text: string,
    classes?: string,
    target: string
}

export interface MenuElements extends Array<MenuElement> {

}