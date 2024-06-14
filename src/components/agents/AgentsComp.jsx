import React from "react";
import { searchIcon } from "~/assets/icons";
import { agentImg } from "~/assets/img";
import AgentDetailsCard from "~/components/agents/AgentDetailsCard";
import OptGroup from "~/components/herosection/Optgroup";
import Button from "~/components/reusable/Button";
import FormControl from "~/components/reusable/FormControl";
import Svg from "~/components/reusable/Svg";

export default function AgentsComp() {
  const cities = ["Uyo", "Asaba", "Port Harcourt"];
  const categories = ["Residential", "Industrial", "Commercial"];
  return (
    <section className="mt-20">
      <div className="mb-14">
        <div className="bg-white border-b border-[#EAECF0] px-4 md:px-16 mb-16 py-6">
          <p className="text-2xl font-semibold mb-6">Find Agent</p>
          <div className="flex flex-col md:flex-row !gap-6">
            <FormControl
              as="input"
              required
              type={"search"}
              title={"location"}
              placeholder="Enter agent name"
              icon={
                <Svg className={"absolute top-4 right-4"} href={searchIcon} />
              }
            />
            <FormControl as="select">
              <OptGroup subItems={cities} />
            </FormControl>
            <FormControl as="select">
              <OptGroup subItems={categories} />
            </FormControl>
            <Button type="submit" className="w-full md:max-w-[200px] py-[10px]">
              Search
            </Button>
          </div>
        </div>
        <div className="flex flex-col !gap-4 px-4 md:!gap-8 mb-16">
          <AgentDetailsCard
            agentImg={agentImg}
            agentName="Clinton Richard"
            position="Sale Executive at HedgeStone Property"
            officeAddress="89 Abak Road, Uyo, Akwa Ibom."
            phoneNumber="+23481-6423-5383"
            serviceAreas="Ewet Housing, Ikot Ekpene rd, Abak rd"
            profileLink="/agents/29392239"
            messageLink="/agents/message-me"
            phoneNumberLink="string"
            whatsappLink="string"
          />
          <AgentDetailsCard
            agentImg={agentImg}
            agentName="Clinton Richard"
            position="Sale Executive at HedgeStone Property"
            officeAddress="89 Abak Road, Uyo, Akwa Ibom."
            phoneNumber="+23481-6423-5383"
            serviceAreas="Ewet Housing, Ikot Ekpene rd, Abak rd"
            profileLink="/agents/29392239"
            messageLink="/agents/message-me"
            phoneNumberLink="string"
            whatsappLink="string"
          />
        </div>
      </div>
    </section>
  );
}
