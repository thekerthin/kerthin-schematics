/**
 * Kerthin New BE App Options Schema
 */
export interface NewAppOptions {
    /**
     * The name of the application.
     */
    name: string;
    /**
     * Database for the application.
     */
    db: 'postgresql' | 'mysql' | 'mongodb';
    /**
     * Kerthin application author.
     */
    author?: string;
    /**
     * Kerthin application version.
     */
    version?: string;
    /**
     * Kerthin application directory.
     */
    directory?: string;
}
