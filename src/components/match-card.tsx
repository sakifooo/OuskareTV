'use client';

import { LucideTrophy, LucideMic2, LucideTv, LucidePlayCircle } from "lucide-react";
import Link from "next/link";

interface MatchProps {
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  time: string;
  status: "live" | "finished" | "upcoming";
  channel?: string;
  league?: string;
  commentator?: string;
  href?: string;
}

const FootballIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    className="w-5 h-5 md:w-6 md:h-6 fill-gray-300"
  >
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208S370.7 464 256 464zM256 128l-80 48v80l80 48l80-48v-80L256 128z"/>
  </svg>
);

export function MatchCard({ teamA, teamB, scoreA, scoreB, time, status, channel, league, commentator, href = "#" }: MatchProps) {
  return (
    <Link 
      href={href}
      className="block bg-white rounded-xl overflow-hidden shadow-md border-2 border-[#a11d1d] hover:shadow-lg hover:scale-[1.01] transition-all group mb-3"
    >
      {/* Upper Part: Teams and Score */}
      <div className="flex items-center justify-between p-3 md:p-5">
        {/* Team A */}
        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          <span className="font-bold text-sm md:text-lg text-gray-800 text-right">{teamA}</span>
          <div className="flex-shrink-0">
            <FootballIcon />
          </div>
        </div>

        {/* Center: Time/Score */}
        <div className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[140px] gap-1">
          {status === "upcoming" ? (
            <>
              <span className="text-base md:text-xl font-black text-gray-700">{time}</span>
              <span className="status-badge !bg-green-600 px-4">لم تبدأ</span>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-3xl font-black text-gray-800">{scoreA ?? 0}</span>
                <span className="text-[#a11d1d] font-black text-xl md:text-2xl">:</span>
                <span className="text-xl md:text-3xl font-black text-gray-800">{scoreB ?? 0}</span>
              </div>
              <span className={status === "live" ? "status-badge !bg-red-600 animate-pulse px-4" : "status-badge-finished px-4"}>
                {status === "live" ? "مباشر" : "انتهت"}
              </span>
            </>
          )}
        </div>

        {/* Team B */}
        <div className="flex flex-1 items-center justify-start gap-2 md:gap-4">
          <div className="flex-shrink-0">
            <FootballIcon />
          </div>
          <span className="font-bold text-sm md:text-lg text-gray-800 text-left">{teamB}</span>
        </div>
      </div>

      {/* Lower Part: Info Bar */}
      <div className="bg-gray-50 border-t-2 border-[#a11d1d]/10 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-[10px] md:text-[13px] text-gray-600 font-bold">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-1.5">
            <LucideTv className="w-4 h-4 text-[#a11d1d]" />
            <span>{channel || "غير معروف"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <LucideMic2 className="w-4 h-4 text-gray-400" />
            <span>{commentator || "غير معروف"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <LucideTrophy className="w-4 h-4 text-[#a11d1d]" />
            <span>{league || "غير معروف"}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 text-[#a11d1d] font-black group-hover:translate-x-[-5px] transition-transform">
          <LucidePlayCircle className="w-4 h-4" />
          <span className="text-sm">شاهد الآن</span>
        </div>
      </div>
    </Link>
  );
}
