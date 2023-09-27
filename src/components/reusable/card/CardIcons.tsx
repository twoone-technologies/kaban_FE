import Svg from '../Svg';

const plural = (num: number) => {
  if (num === 0) return 'nil';
  if (num === 1) return num;
  return num;
};

export default function CardIcons({
  title, num, icon}: {
  title: string;
  icon: string;
  num: number;
}) {

  return (
    <div title={title} className="flex align-y">
      <Svg href={icon} />
      <span>{plural(num)}</span>
    </div>
  );
}
