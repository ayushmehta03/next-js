import {pgTable,text,uuid,integer,boolean} from "drizzle-orm/pg-core"
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

    // Information  
    
})
