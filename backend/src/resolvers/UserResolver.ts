import { Arg, Mutation, Query, Resolver } from "type-graphql";
import User from "../models/User";
import crypto from 'crypto'

@Resolver()
export default class UserResolvers {

   private users: User[] = []

   @Query(() => [User])
   async AllUsers() {
      return this.users
   }

   @Mutation(() => User)
   async CreateUser(@Arg('name') name: string) {
      const user = { id: `${crypto.randomUUID()}`, name: name }
      this.users.push(user)

      return user
   }

}