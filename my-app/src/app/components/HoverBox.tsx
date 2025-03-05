import { motion } from "framer-motion";

interface HoverBoxProps {
  color: string;
  name: string | number;
  imageSrc: string;
  roundedClass: string; // border-radius 클래스
}

const HoverBox: React.FC<HoverBoxProps> = ({
  name,
  imageSrc,
  roundedClass,
  color,
}) => {
  return (
    <motion.div
      className={`${color} border-none flex items-center justify-center text-center border-2 ${roundedClass} p-4`}
      initial={{ opacity: 1, scale: 1 }} // 기본 상태에서는 크기 변환 없이
      whileHover={{
        scale: 1.1, // 호버 시 크기 증가
        opacity: 0.9, // 호버 시 약간 투명하게
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut", // 부드러운 애니메이션을 위한 easing
      }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src={imageSrc}
          alt="icon"
          className="w-16 h-16 mb-4"
          initial={{ opacity: 0 }} // 기본 상태에서 안 보임
          animate={{ opacity: 0 }} // 기본 상태에서 안 보임
          whileHover={{ opacity: 1 }} // 호버 시 보이도록 설정
          transition={{ delay: 0.2 }}
        />
        <motion.p
          className="text-white text-lg"
          initial={{ opacity: 1 }} // 기본 상태에서 보임
          animate={{ opacity: 1 }} // 기본 상태에서 보임
          whileHover={{ opacity: 0 }} // 호버 시 안 보이도록 설정
        >
          {name}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HoverBox;
