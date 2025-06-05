import { timeStamp } from "console"
import {pgTable,text,uuid,integer,boolean,timestamp}from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const files= pgTable("files",{
    id:uuid("id").defaultRandom().primaryKey(),
    // basic file/folder information

    name:text("name").notNull(),
    path:text("path").notNull(),
    size:integer("size").notNull(),
    type:text("type").notNull(),

    // storage infromation

    fileUrl: text("file_url").notNull(), // url to acces file
    thumbNailUrl:text("thumbnail_url"),

    // Ownsership Information
    userId:text("user_id").notNull(),
    parentId:uuid("parent_id"), // parent folder 

    // file folder flags
    isFolder:boolean("is_folder").default(false).notNull(),
    isStarred:boolean("is_starred").default(false).notNull(),
    isTrash:boolean("is_trash").default(false).notNull(),

    // TimeSTAMP
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull()



})
export const fileRelations=relations(files,({one,many})=>({
    parent: one(files,{
        fields:[files.parentId],
        references:[files.id]
    }),


        // relationship to file/folder
    children: many(files)
}))

// Type defination
export const File= typeof files.$inferSelect;
export const newFile= typeof files.$inferInsert;
