import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class logobject {
  @JsonProperty('type', String, true)
  public type: string = undefined;

  @JsonProperty('name', String, true)
  public name: string = undefined;

}