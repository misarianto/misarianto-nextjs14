// https://react-icons.github.io/react-icons
import { SiNextdotjs, SiNuxtdotjs, SiLivewire, SiAlpinedotjs, SiTailwindcss, SiCss3, SiDart, SiFlutter, SiTypescript, SiIonic, SiDocker, SiUbuntu, SiBootstrap, SiBun, SiHtml5, SiLinux, SiPhp, SiJavascript, SiGo, SiAdonisjs, SiNodedotjs, SiVim, SiVisualstudiocode, SiApple, SiGithub, SiAndroid, SiCyberdefenders, SiLaravel, SiReact, SiVuedotjs } from "react-icons/si";

export default function TechStack() {
  return (
    <section className="pt-24 pb-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl text-center mx-auto">
          <span
            className="inline-block mb-4 px-3 py-1.5 text-sm uppercase tracking-tight font-semibold  rounded-full"
            style={{
              background: "url('basko-assets/images/gradient.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            Tech Stack
          </span>
          <h2 className="font-heading mb-4 text-6xl tracking-tighter">
            Some of the technologies that I master
          </h2>
          <p className="mb-16 text-xl tracking-tight">
            The technology below is the technology that I use and that I master
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div
            className="absolute top-0 left-0 w-24 md:w-96 h-full bg-gradient-to-r from-background to-transparent"
          ></div>
          <div
            className="absolute top-0 right-0 w-24 md:w-96 h-full transform rotate-180 bg-gradient-to-r from-background to-transparent"
          ></div>
          <div className="flex flex-wrap justify-center -m-1.5">
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5 border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiPhp className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">PHP</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiReact className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">React.js</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiLaravel className="mr-1.5 w-6 h-6 text-red-700" />
                </div>
                <span className="font-bold tracking-tight">Laravel</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiVuedotjs className="mr-1.5 w-6 h-6 text-green-700" />
                </div>
                <span className="font-bold tracking-tight">Vue.js</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiNextdotjs className="mr-1.5 w-6 h-6 text-black-700" />
                </div>
                <span className="font-bold tracking-tight">Next.js</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiNuxtdotjs className="mr-1.5 w-6 h-6 text-green-700" />
                </div>
                <span className="font-bold tracking-tight">Nuxt.js</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiLivewire className="mr-1.5 w-6 h-6 text-pink-700" />
                </div>
                <span className="font-bold tracking-tight">Livewire</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                  <SiAlpinedotjs className="mr-1.5 w-6 h-6 text-black-700" />
                </div>
                <span className="font-bold tracking-tight">Alpine.js</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiDart className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">Dart</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiFlutter className="mr-1.5 w-6 h-6 text-blue-400" />
                </div>
                <span className="font-bold tracking-tight">Flutter</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block mr-1.5">
                <SiCss3 className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">CSS</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiHtml5 className="mr-1.5 w-6 h-6 text-orange-700" />
                </div>
                <span className="font-bold tracking-tight">HTML</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiUbuntu className="mr-1.5 w-6 h-6 text-orange-700" />
                </div>
                <span className="font-bold tracking-tight">Ubuntu</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiLinux className="mr-1.5 w-6 h-6 text-black-700" />
                </div>
                <span className="font-bold tracking-tight">Linux</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiTailwindcss className="mr-1.5 w-6 h-6 text-blue-400" />
                </div>
                <span className="font-bold tracking-tight">Tailwindcss</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiBootstrap className="mr-1.5 w-6 h-6 text-purple-700" />
                </div>
                <span className="font-bold tracking-tight">Bootstrap</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiTypescript className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">Typescript</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiJavascript className="mr-1.5 w-6 h-6 text-yellow-700" />
                </div>
                <span className="font-bold tracking-tight">Javascript</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiDocker className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">Docker</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiGo className="mr-1.5 w-6 h-6 text-blue-400" />
                </div>
                <span className="font-bold tracking-tight">Golang</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiIonic className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">Ionic</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiBun className="mr-1.5 w-6 h-6 text-black-700" />
                </div>
                <span className="font-bold tracking-tight">Bun</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiNodedotjs className="mr-1.5 w-6 h-6 text-green-700" />
                </div>
                <span className="font-bold tracking-tight">Node.js</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiAdonisjs className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">Adonis.js</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiVim className="mr-1.5 w-6 h-6 text-green-700" />
                </div>
                <span className="font-bold tracking-tight">Vim</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiVisualstudiocode className="mr-1.5 w-6 h-6 text-blue-700" />
                </div>
                <span className="font-bold tracking-tight">VS Code</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiAndroid className="mr-1.5 w-6 h-6 text-green-700" />
                </div>
                <span className="font-bold tracking-tight">Android Studio</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiApple className="mr-1.5 w-6 h-6 text-black-700" />
                </div>
                <span className="font-bold tracking-tight">IOS</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiGithub className="mr-1.5 w-6 h-6 text-black-700" />
                </div>
                <span className="font-bold tracking-tight">Github</span>
              </a>
            </div>
            <div className="w-auto p-1.5">
              <a
                className="flex items-center px-6 py-2.5  border border-gray-800 rounded-full transition duration-200"
                href="#"
              >
                <div className="inline-block">
                <SiCyberdefenders className="mr-1.5 w-6 h-6 text-black-700" />
                </div>
                <span className="font-bold tracking-tight">Cyber</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
