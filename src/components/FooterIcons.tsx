import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterIcons = ({
  items,
}: {
  items: { link: string; icon: any }[];
}) => {
  return (
    <div className="flex gap-2">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="flex items-center justify-center w-8 h-8"
        >
          <FontAwesomeIcon icon={item.icon} className="text-white text-2xl" />
        </a>
      ))}
    </div>
  );
};
