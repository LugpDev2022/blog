import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema(
  {
    slug: { type: String, unique: true, required: true },

    translations: {
      en: {
        title: { type: String, required: true },
        content: { type: String, required: true },
      },
      es: {
        title: { type: String, required: true },
        content: { type: String, required: true },
      },
    },
  },
  { timestamps: true }
);

export default models.Article || model('Article', ArticleSchema);
