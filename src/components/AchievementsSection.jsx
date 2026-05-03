import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import achievements from "../data/achievements.json";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

const AchievementsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <section
            ref={ref}
            id="achievements"
            className="py-20 px-4 sm:px-6 bg-gradient-to-br from-black via-emerald-900/20 to-black"
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    initial="hidden"
                    animate={controls}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-3">
                        Achievements
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                        Highlights of competitive achievements and recognitions.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="relative"
                >

                    {/* Center Line (hidden on mobile) */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent transform -translate-x-1/2"
                    />

                    <div className="space-y-16 md:space-y-24">
                        {achievements.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    className="relative grid md:grid-cols-2 gap-8 md:gap-10 items-center"
                                >

                                    {/* Mobile Layout (stacked) */}
                                    <div className="md:hidden space-y-4">
                                        <div>
                                            <h3 className="text-base font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-emerald-400 text-xs mb-1">
                                                {item.place}
                                            </p>
                                            <p className="text-gray-300 text-sm">
                                                {item.description}
                                            </p>
                                        </div>

                                        <motion.div
                                            variants={imageVariants}
                                            whileHover={{ rotate: 1, y: -3 }}
                                        >
                                            <div className="w-full h-[180px] rounded-lg overflow-hidden border border-white/10 shadow-lg">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Desktop Layout */}
                                    <>
                                        {isLeft ? (
                                            <>
                                                <div className="hidden md:block text-right pr-12">
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-emerald-400 text-sm mb-2">
                                                        {item.place}
                                                    </p>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <motion.div
                                                    variants={imageVariants}
                                                    whileHover={{ rotate: 2, y: -5 }}
                                                    className="hidden md:block pl-12"
                                                >
                                                    <div className="w-full h-[240px] rounded-xl overflow-hidden border border-white/10 shadow-xl">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </motion.div>
                                            </>
                                        ) : (
                                            <>
                                                <motion.div
                                                    variants={imageVariants}
                                                    whileHover={{ rotate: -2, y: -5 }}
                                                    className="hidden md:block pr-12"
                                                >
                                                    <div className="w-full h-[240px] rounded-xl overflow-hidden border border-white/10 shadow-xl">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </motion.div>

                                                <div className="hidden md:block text-left pl-12">
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-emerald-400 text-sm mb-2">
                                                        {item.place}
                                                    </p>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </>

                                    {/* Center Dot (desktop only) */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AchievementsSection;