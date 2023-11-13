export abstract class SharedConfig {
  protected abstract config: object;

  abstract get configObject(): object;
}
