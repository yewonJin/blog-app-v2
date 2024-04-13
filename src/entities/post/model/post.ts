import { Model, Schema, model, models } from "mongoose";

import { TPost } from "./types";

interface PostModel extends Model<TPost> {
  updatePost: (payload: TPost) => Promise<TPost>;
  deletePost: (postNumber: number) => Promise<TPost>;
  findAllWithoutContent: () => Promise<TPost[]>;
  findRecentPostWithoutContent: (numberOfPost: number) => Promise<TPost[]>;
  findByPostNumber: (postNumber: number) => Promise<TPost[]>;
  findByPostNumberWithoutContent: (postNumber: number) => Promise<TPost[]>;
  findLastestPost: () => Promise<TPost[]>;
  findByCategory: (category: string) => Promise<TPost[]>;
}

const postSchema = new Schema<TPost, PostModel>({
  postNumber: { type: Number, unique: true },
  title: { type: String },
  category: { type: String },
  content: { type: String },
  summary: { type: String },
  keyword: { type: [String] },
  date: { type: Date },
  views: { type: Number },
  hearts: { type: Number },
});

postSchema.statics.create = function (payload: TPost) {
  const post = new this({ ...payload, date: new Date() });
  return post.save();
};

postSchema.statics.updatePost = function (payload: TPost) {
  return this.updateOne({ postNumber: payload.postNumber }, { $set: payload });
};

postSchema.statics.deletePost = function (postNumber: number) {
  return this.deleteOne({ postNumber });
};

postSchema.statics.findAllWithoutContent = function () {
  return this.aggregate([
    {
      $project: {
        content: 0,
      },
    },
    {
      $sort: { postNumber: -1 },
    },
  ]);
};

postSchema.statics.findLastestPost = function () {
  return this.aggregate([
    {
      $project: {
        postNumber: 1,
      },
    },
    {
      $sort: { postNumber: -1 },
    },
    {
      $limit: 1,
    },
  ]);
};

postSchema.statics.findRecentPostWithoutContent = function (
  numberOfPost: number
) {
  return this.aggregate([
    {
      $project: {
        content: 0,
      },
    },
    {
      $sort: { postNumber: -1 },
    },
    {
      $limit: numberOfPost,
    },
  ]);
};

postSchema.statics.findByPostNumber = function (postNumber: number) {
  return this.find({ postNumber });
};

postSchema.statics.findByPostNumberWithoutContent = function (
  postNumber: number
) {
  return this.aggregate([
    {
      $match: { postNumber: postNumber },
    },
    {
      $project: {
        content: 0,
      },
    },
  ]);
};

postSchema.statics.findByCategory = function (category: string) {
  return this.find({ category });
};

const Post =
  (models["Post"] as PostModel) || model<TPost, PostModel>("Post", postSchema);

export default Post;
