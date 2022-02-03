/**
 * Kerthin Event Options Schema
 */
export interface EventOptions {
    /**
     * The name of the event.
     */
    name: string;
    /**
     * Module name for the event.
     */
    moduleName: string;
    /**
     * Event action.
     */
    action: string;
    /**
     * Event directory.
     */
    directory?: string;
}
