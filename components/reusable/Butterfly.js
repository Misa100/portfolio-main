import { motion } from 'framer-motion';

const butterflyVariants = (offsetX, offsetY) => ({
  initial: { scale: 0.8, x: -50 + offsetX, y: -20 + offsetY },
  animate: {
    x: [0 + offsetX, 30 + offsetX, -30 + offsetX, 0 + offsetX],
    y: [0 + offsetY, -30 + offsetY, 30 + offsetY, 0 + offsetY],
    scale: [0.8, 1.1, 0.9, 1.0],
    rotate: [0, 20, -20, 0],
    transition: {
      x: { duration: 4, yoyo: Infinity },
      y: { duration: 4, yoyo: Infinity },
      scale: { duration: 4, yoyo: Infinity },
      rotate: { duration: 4, yoyo: Infinity }
    }
  }
});

const Butterfly = ({ offsetX, offsetY }) => (
  <motion.img
  className="hidden sm:block"
    variants={butterflyVariants(offsetX, offsetY)}
    initial="initial"
    animate="animate"
    src="images/butterfly.png"
    alt="Butterfly"
    style={{
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: `20%`,
      left: `50%`
    }}
  />
);

const Butterflies = () => {
  return (
    <>
      <Butterfly offsetX={-30} offsetY={40} />
      <Butterfly offsetX={-20} offsetY={-50} />
      <Butterfly offsetX={30} offsetY={60} />
    </>
  );
};

export default Butterflies;
