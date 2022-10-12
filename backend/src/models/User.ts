import { __Type } from "graphql";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class User {

   @Field(__Type => ID)
   id: String;

   @Field()
   name: String

}