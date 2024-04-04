import { Model, Schema, model, models } from "mongoose";
import { TCategory } from "./types";

interface CategoryModel extends Model<TCategory> {
  deleteByName: (name: string) => Promise<void>;
  findAll: () => Promise<TCategory[]>;
  findByName: (name: string) => Promise<TCategory>;
  findOneAndPushToPost: (
    categoryName: string,
    postNumber: number
  ) => Promise<TCategory[]>;
  findOneAndPullPost: (
    categoryName: string,
    postNumber: number
  ) => Promise<TCategory[]>;
}

const categorySchema = new Schema<TCategory, CategoryModel>({
  name: { type: String, unique: true },
  posts: { type: [Number] },
});

categorySchema.statics.create = function (payload: TCategory) {
  const category = new this(payload);
  return category.save();
};

categorySchema.statics.deleteByName = function (name: string) {
  return this.deleteOne({ name: name });
};

categorySchema.statics.findAll = function (name: string) {
  return this.find({});
};

categorySchema.statics.findByName = function (name: string) {
  return this.findOne({ name });
};

categorySchema.statics.findOneAndPushToPost = function (
  categoryName: string,
  postNumber: number
) {
  return this.updateOne(
    { name: categoryName },
    {
      $push: {
        posts: postNumber,
      },
    }
  );
};

categorySchema.statics.findOneAndPullPost = function (
  categoryName: string,
  postNumber: number
) {
  return this.updateOne(
    { name: categoryName },
    {
      $pull: {
        posts: postNumber,
      },
    }
  );
};

const Category =
  (models["Category"] as CategoryModel) ||
  model<TCategory, CategoryModel>("Category", categorySchema);

export default Category;
