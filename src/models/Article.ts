import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema(
  {
    icon: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },

    en: {
      title: { type: String, required: true },
      url: { type: String, required: true },
    },
    es: {
      title: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default models.Article || model('Article', ArticleSchema);
