import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema(
  {
    icon: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },

    title: {
      en: { type: String, required: true },
      es: { type: String, required: true },
    },

    baseUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Article || model('Article', ArticleSchema);
