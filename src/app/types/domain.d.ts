interface ValueObject {
  id?: string;
  editable?: boolean;
  name: string;
}

interface DomainObject {
  id?: string;
  isRoot: boolean;
  isEntity: boolean;
  name: string;
  editable?: boolean;
  newItem?: ValueObject;
  valueObjects: ValueObject[];
}

interface AggregateItem {
  domainObjects?: DomainObject[];
  newGroup?: DomainObject;
}

interface AggregateGroup {
  aggregates: AggregateItem[];
}
