import {
	Additional,
	Asked,
	Brands,
	BrandsBy,
	Clients,
	Crypto,
	Hero,
	HomeForm,
	Leader,
	Marketing,
	Media,
	Saying,
	Search,
	Services,
	SetUp,
	Social,
	Strategy,
	Web,
} from './home/_sections'

export default function Home() {
	return (
		<>
			<Hero />
			<Brands />
			<Services />
			<BrandsBy />
			<Marketing />
			<SetUp />
			<Media />
			<Social />
			<Search />
			<Web />
			<Strategy />
			<Leader />
			<Crypto />
			<Saying />
			<Clients />
			<Additional />
			<HomeForm />
			<Asked />
		</>
	)
}
