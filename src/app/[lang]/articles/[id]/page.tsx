import { Locale } from '@/src/app/types/shared.types';

interface Props {
  params: { lang: Locale };
}

const ArticlePage: React.FC<Props> = async ({ params: { lang } }) => {
  return (
    <>
      <h1 className='article-title'>Lorem ipsum dolor sit amet, consectetur</h1>
      <h2 className='article-info'>
        <time>4/dic/2023</time> - Luis Cervantes
      </h2>
      <hr />

      <h3 className='article-subtitle'>Subtitle 1</h3>
      <p className='article-p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum
        sapien velit, et semper felis pharetra a. Ut egestas, dui quis
        ullamcorper hendrerit, mi libero molestie neque, eu sollicitudin erat
        dui a erat. Maecenas dapibus massa at commodo porta. Etiam ut dolor ut
        felis sollicitudin consectetur non eget magna. Ut lobortis pellentesque
        ipsum at convallis. Aenean at massa vitae libero feugiat semper quis sit
        amet risus. Integer a purus in ex luctus posuere convallis id dui.
      </p>

      <h3 className='article-subtitle'>Subtitle 2</h3>
      <p className='article-p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum
        sapien velit, et semper felis pharetra a. Ut egestas, dui quis
        ullamcorper hendrerit, mi libero molestie neque, eu sollicitudin erat
        dui a erat. Maecenas dapibus massa at commodo porta. Etiam ut dolor ut
        felis sollicitudin consectetur non eget magna. Ut lobortis pellentesque
        ipsum at convallis. Aenean at massa vitae libero feugiat semper quis sit
        amet risus. Integer a purus in ex luctus posuere convallis id dui.
      </p>

      <h3 className='article-subtitle'>Subtitle 3</h3>
      <p className='article-p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum
        sapien velit, et semper felis pharetra a. Ut egestas, dui quis
        ullamcorper hendrerit, mi libero molestie neque, eu sollicitudin erat
        dui a erat. Maecenas dapibus massa at commodo porta. Etiam ut dolor ut
        felis sollicitudin consectetur non eget magna. Ut lobortis pellentesque
        ipsum at convallis. Aenean at massa vitae libero feugiat semper quis sit
        amet risus. Integer a purus in ex luctus posuere convallis id dui.
      </p>
    </>
  );
};

export default ArticlePage;
