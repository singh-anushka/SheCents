import { SidebarItem } from "@/components/sidebar-item";
import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-3xl font-extrabold text-rose-600 tracking-wide">
       SheCents
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Blogs" href="/blogs" iconSrc="/blogs.svg" />
        <SidebarItem label="Connect" href="/connect" iconSrc="/connect.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" showName/>
        </ClerkLoaded>
      </div>
    </div>
  );
};
