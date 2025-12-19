type Page = {
    title: string;
    likes: number;
    accounts: Array<string>;
    status: string;
    details?: {
        createAt: Date;
        updateAt: Date;
    };
};
declare const page1: Page;
declare const page2: Page;
export { page1, page2 };
//# sourceMappingURL=9.d.ts.map