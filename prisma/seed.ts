import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.upsert({
		where: { id: 1 },
		update: {},
		create: {
			firstName: "seed",
			lastName: "db",
			email: "seed@prisma.com",
			password: "seed",
			creator: true,
			projects: {
				create: [
					{
						title: "The Rocketeer and Dave Stevens: A Documentary Film",
						description:
							"An authorized feature length documentary about the art and life of beloved illustrator Dave Stevens, creator of The Rocketeer.",
						country: "USA",
						images: {
							create: [
								{
									url: "img1",
								},
								{
									url: "img2",
								},
							],
						},
						videos: {
							create: [
								{
									url: "img1",
								},
								{
									url: "img2",
								},
							],
						},

						Budget: 0,
						categories: {
							create: [
								{
									Name: "Art",
									subCategories: {
										create: [
											{
												Name: "Dance",
											},
											{ Name: "Music" },
											{ Name: "Design" },
										],
									},
								},
								{
									Name: "Games",
									subCategories: {
										create: [
											{
												Name: "Horror",
											},
											{ Name: "FPS" },
										],
									},
								},
								{
									Name: "Technology",
									subCategories: {
										create: [
											{
												Name: "Web Dev",
											},
											{ Name: "Big Data" },
										],
									},
								},
							],
						},

						comments: {
							create: [
								{
									comment:
										"it's really an interesting project ",
								},
								{ comment: "well done" },
								{ comment: "Great Job, keep on going!" },
								{
									comment:
										"let's support this project guys it's really good!",
								},
								{
									comment:
										"I'm really into the idea, well done ",
								},
								{ comment: "it's really bad nah" },
								{ comment: "what is that, terrible idea" },
							],
						},
						moneyRaised: 43,
					},
					{
						title: "Amoeba Presents Newly Discovered Gram Parsons Recordings",
						description:
							"Polly Parsons and Amoeba Music are working together to release a recently discovered long-lost Gram Parsons performance on CD and 2LP.",
						country: "USA",
						images: {
							create: [
								{
									url: "img1",
								},
								{
									url: "img2",
								},
							],
						},
						videos: {
							create: [
								{
									url: "img1",
								},
								{
									url: "img2",
								},
							],
						},
						Budget: 50000,

						comments: {
							create: [
								{
									comment:
										"it's really an interesting project ",
								},
								{ comment: "well done" },
								{ comment: "Great Job, keep on going!" },
								{
									comment:
										"let's support this project guys it's really good!",
								},
								{
									comment:
										"I'm really into the idea, well done ",
								},
								{ comment: "it's really bad nah" },
								{ comment: "what is that, terrible idea" },
							],
						},
						moneyRaised: 0,
					},
					{
						title: "Project Mushroom",
						description:
							"A community platform for justice and action on an overheating planet.",
						country: "FR",
						images: {
							create: [
								{
									url: "img1",
								},
								{
									url: "img2",
								},
							],
						},
						videos: {
							create: [
								{
									url: "img1",
								},
								{
									url: "img2",
								},
							],
						},
						Budget: 1000,
						categories: {
							create: [
								{
									Name: "Social",
								},
								{
									Name: "Environment",
								},
								{
									Name: "HealthCare",
								},
							],
						},

						comments: {
							create: [
								{
									comment: "woww very interesting topic",
								},
								{ comment: "well done" },
								{ comment: "am impressed" },
							],
						},
						moneyRaised: 0,
					},
				],
			},
			chats: {
				create: [
					{
						messages: {
							create: [
								{
									message: "hey there",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "hey!",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "can we meet soon ?",
									senderId: 1,
									receiverId: 1,
								},
							],
						},
					},
					{
						messages: {
							create: [
								{
									message: "hello ",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "hello!",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "how are u?",
									senderId: 1,
									receiverId: 1,
								},
							],
						},
					},
				],
			},
		},
	});
	console.log(user);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
