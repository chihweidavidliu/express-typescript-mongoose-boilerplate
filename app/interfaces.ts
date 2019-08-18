import mongoose, { Schema, Document } from "mongoose";

export interface EnvConfig {
    PORT: number;
    MONGODB_URI: string;
    [key: string]: any;
}
