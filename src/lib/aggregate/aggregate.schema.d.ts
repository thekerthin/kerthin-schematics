/**
 * Kerthin Aggregate Options Schema
 */
export interface AggregateOptions {
    /**
     * The name of the aggregate.
     */
    name: string;
    /**
     * Module name for the aggregate.
     */
    moduleName: string;
    /**
     * Properties for the aggregate.
     */
    properties: string;
    /**
     * Aggregate directory.
     */
    directory: string;
}
