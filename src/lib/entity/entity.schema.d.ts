/**
 * Kerthin Entity Options Schema
 */
export interface EntityOptions {
    /**
     * The name of the entity.
     */
    name: string;
    /**
     * Module name for the entity.
     */
    moduleName: string;
    /**
     * Properties for the entity.
     */
    properties: string;
    /**
     * Entity directory.
     */
    directory?: string;
}
