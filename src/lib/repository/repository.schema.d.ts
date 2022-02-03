/**
 * Kerthin Repository Options Schema
 */
export interface RepositoryOptions {
    /**
     * The name of the repository.
     */
    name: string;
    /**
     * Module name for the entity.
     */
    moduleName: string;
    /**
     * Entity or Aggregate for ref repository.
     */
    entity: string;
    /**
     * Entity directory.
     */
    directory?: string;
}
