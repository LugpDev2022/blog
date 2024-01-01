import { Schema, model, models } from 'mongoose';

const ArticleSchema = new Schema(
  {
    icon: {
      src: { type: String, required: true },
      alt: {
        es: { type: String, required: true },
        en: { type: String, required: true },
      },
    },

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
