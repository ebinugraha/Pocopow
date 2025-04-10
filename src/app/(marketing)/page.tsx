import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MockDiscordUI } from "@/components/monk-discord-ui";
import { Button } from "@/components/ui/button";
import { AnimatedList } from "@/components/magicui/animated-list";
import { DiscordMessage } from "@/components/discord-messaget";

export default function Home() {
  return (
    <>
      <section className="relative md:py-36 sm:py-40 py-24">
        <MaxWidthWrapper>
          <div className="relative flex md:flex-row flex-col justify-between w-full">
            <div className="max-w-[700px] w-full p-2">
              <div className="mb-10">
                <h1 className="md:text-4xl sm:text-5xl xs:text-3xl text-2xl">We Make <br/> <span className="font-bold"> Real-Time SaaS Insight <br/> Delivered to your Discord</span></h1>
              </div>
              <div className="max-w-md">
                <div className="flex items-center justify-between">
                  <div className="w-full">
                    <Button className="w-full" size={"lg"}>Start for free today</Button>
                  </div>
                  <div className="flex justify-between p-2 items-center">
                    <h1 className="w-[89px] font-bold text-xl">
                      IDR 56K
                    </h1>
                    <div className="h-7 w-[1px] bg-black"/>
                    <div className="flex-row text-xs ml-2 text-slate-600 font-bold">
                      <h1>Monthly</h1>
                      <h1>Price</h1>
                    </div>
                  </div>  
                </div>                
              </div>
            </div>
            <div className="flex w-full max-w-96">
              <div className="relative w-full bg-[#e4ddcf] border border-[#000000] rounded-3xl p-4 pt-9">
                <div className="relative w-full gap-y-5 flex flex-col">
                  {[
                    "Real-Time Discord alerts for critical events",
                    "Buy once, use forever",
                    "Track sales. new users, or any other event"
                  ].map((item, index) => (<div className="flex items-center gap-4" key={index}><div className="w-5 h-5 border border-[#000000] rounded-full bg-[#f6f7a8]"/>{item}</div>))}
                </div>
                <div className="flex bg-[#f6f7a8] mt-7 p-4 rounded-2xl border border-[#000000]  ">
                  <h1>
                    Pocopow is the easiest way to monitor your SaaS. Get Instant Notification for sales, 
                    new, users, or any other event send directly to your discord
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-[#f6f6f6] pb-8">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-[#E4DDCF] ring-1"/>
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-ml-2 rouded-xl bg-[#f6f7a8] ring-1 lg:-m-4 lg:rounded-2xl rounded-xl p-2">
              <MockDiscordUI>
                  <AnimatedList>
                    <DiscordMessage
                      avatarAlt="logo"
                      avatarSrc="/picture-brand.png"
                      badgeText="SignUp"
                      content={{name: "kobi17", email: "febrian.14nugraha@gmail.com"}}
                      timestamp="Today at 13:23PM"
                      title="👤 New user signed up"
                      username="Pocopow"
                      badgeColor="#43b581"
                    />
                    <DiscordMessage
                      avatarAlt="logo"
                      avatarSrc="/picture-brand.png"
                      badgeText="Revenue"
                      content={{amount: "Rp 56.000", email: "febrian.14nugraha@gmail.com", plan: "pro"}}
                      timestamp="Today at 13:23PM"
                      title="👤 New user signed up"
                      username="Pocopow"
                      badgeColor="#faa61a"
                    />
                    <DiscordMessage
                      avatarAlt="logo"
                      avatarSrc="/picture-brand.png"
                      badgeText="Revenue"
                      content={{amount: "Rp 56.000", email: "febrian.14nugraha@gmail.com", plan: "pro"}}
                      timestamp="Today at 13:23PM"
                      title="👤 New user signed up"
                      username="Pocopow"
                      badgeColor="#faa61a"
                    />
                  </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="relative bg-[#f6f6f6] py-24 ">
        <MaxWidthWrapper className="flex flex-col items-center gap-16">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-[#E4632C] mb-2">Intuitive Monitoring</h2>
            <h1 className="text-center text-4xl font-bold text-[#000000]">Stay ahead with real-time insight</h1>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
