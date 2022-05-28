import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Event extends mongoose.Document {
  @Prop()
  type: string;

  @Prop()
  name: string;

  @Prop({ type: mongoose.SchemaTypes.Mixed })
  // @Prop(mongoose.SchemaTypes.Mixed) This is as how the course told me to do it
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
