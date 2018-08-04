import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class cardImage {
  @JsonProperty('ImageSrc', [String], true)
  public ImageSrc: string[] = [];

  @JsonProperty('DisplayName', [String], true)
  public DisplayName: string[] = [];

}