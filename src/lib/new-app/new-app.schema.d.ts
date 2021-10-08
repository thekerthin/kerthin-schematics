/**
 * Kerthin New BE App Options Schema
 */
export interface NewAppOptions {
    /**
     * The name of the application.
     */
    name: string;
    /**
     * Kerthin application author.
     */
    author?: string;
    /**
     * Kerthin application version.
     */
    version?: string;
}
