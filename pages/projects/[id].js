import Image from 'next/image';
import { FiClock, FiTag, FiArrowLeft } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function ProjectSingle(props) {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title={props.project.title} />

			{/* Header */}
			<div>
				<div className="flex row items-center justify-between justify-items-center">
					<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
						{props.project.ProjectHeader.title}
					</p>
					<button
						onClick={() => window.history.back()}
						className="flex items-center text-primary-dark dark:text-primary-light dark:bg-ternary-dark bg-ternary-light p-2 rounded-md hover:bg-opacity-80 transition mt-14 sm:mt-20"
					>
						<FiArrowLeft className="text-l sm:text-xl" />
					</button>
				</div>
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>

			{/* Gallery */}
			<div className="mt-12">
				<Swiper
					modules={[Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					autoHeight={false}
					pagination={{ clickable: true }}
					className="mySwiper"
				>
					{props.project.ProjectImages.map((project) => (
					<SwiperSlide key={project.id}>
						<Image
						src={project.img}
						className="rounded-xl cursor-pointer shadow-lg mb-12 xl:mb-10 2xl:mb-10"
						alt={project.title}
						layout="intrinsic"
						width={2000}
						height={90}
						/>
					</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-10">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project client details */}
					<div className="mb-7 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
						<p className="font-general-regular text-2xl font-semibold text-white mb-4 border-b-2 border-white pb-2">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map((info) => {
								const isLink = info.title === 'Link';
								const isPhone = info.title === 'Phone';
								return (
								<li
									className="font-general-regular text-white dark:text-ternary-light mb-2"
									key={info.id}
								>
									<span className="dark:bg-secondary-dark bg-slate-200 rounded px-2 py-1 mr-2">
									{info.title}:
									</span>
									{isLink ? (
									<a
										href={info.details}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
										aria-label="Project Website"
									>
										{info.details}
									</a>
									) : isPhone ? (
									<span
										className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
										aria-label="Phone Number"
									>
										{info.details}
									</span>
									) : (
									<span>{info.details}</span>
									)}
								</li>
								);
							})}
						</ul>
					</div>

					{/* Single project objectives */}
					<div className="mb-7 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
						<p className="font-general-regular text-2xl font-semibold text-white mb-4 border-b-2 border-white pb-2">
							{props.project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-lg text-white leading-relaxed">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
						<p className="font-general-regular text-2xl font-semibold text-white mb-4 border-b-2 border-white pb-2">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-lg text-white leading-relaxed">
							{props.project.ProjectInfo.Technologies[0].techs.join(', ')}
						</p>
					</div>

					{/* Single project social sharing */}
					<div className="text-left mt-10">
						<div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
							<p className="font-general-regular text-2xl font-semibold text-white mb-4 border-b-2 border-white pb-2">
								{props.project.ProjectInfo.SocialSharingHeading}
							</p>
							{props.project.ProjectInfo.SocialSharing.map((details) => {
								return (
									<a
										key={details.id}
										href={details.url}
										className="font-general-regular text-lg text-white hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 mb-3 block break-words"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Social Media Link"
									>
										{details.url}
									</a>
								);
							})}
						</div>
					</div>
				</div>

				{/* Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<div className="p-6 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-lg">
						<p className="text-white text-2xl font-bold mb-7">
							{props.project.ProjectInfo.ProjectDetailsHeading}
						</p>
						{props.project.ProjectInfo.ProjectDetails.map((details) => {
							return (
								<div key={details.id} className="font-general-regular mb-5 text-lg text-white">
									{Array.isArray(details.details) ? (
										details.details.map((detail, index) => (
											<p
												key={index}
												className={`${
													index === 0
													? 'bg-ternary-dark rounded p-3 mb-4 shadow-md'
													: 'ml-4 mb-4 hover:bg-slate-800 hover:text-indigo-300 transition-all duration-300'
												}`}
											>
												 {detail}
											</p>
										))
									) : (
										<p>{details.details}</p>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* <RelatedProjects /> */}
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { id } = query;
	return {
		props: {
			project: projectsData.filter(
				(project) => project.id === parseInt(id)
			)[0],
		},
	};
}

export default ProjectSingle;
