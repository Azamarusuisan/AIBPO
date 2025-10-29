type UserAvatarProps = {
  name: string;
  role?: string;
  size?: "sm" | "md" | "lg" | "xl";
  colorScheme?: "blue" | "green" | "purple" | "orange" | "pink";
};

export default function UserAvatar({
  name,
  role,
  size = "md",
  colorScheme = "blue"
}: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl",
    xl: "w-24 h-24 text-3xl"
  };

  const colorClasses = {
    blue: "bg-gradient-to-br from-blue-400 to-blue-600",
    green: "bg-gradient-to-br from-green-400 to-green-600",
    purple: "bg-gradient-to-br from-purple-400 to-purple-600",
    orange: "bg-gradient-to-br from-orange-400 to-orange-600",
    pink: "bg-gradient-to-br from-pink-400 to-pink-600"
  };

  return (
    <div className="flex items-center gap-3">
      {/* アバター */}
      <div className={`${sizeClasses[size]} ${colorClasses[colorScheme]} rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
        <span className="relative">
          {initials}
          {/* 人物シルエットのオーバーレイ */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </span>
      </div>

      {/* 名前と役職 */}
      {(name || role) && (
        <div className="flex-1 min-w-0">
          {name && (
            <div className="font-semibold text-gray-900 truncate">
              {name}
            </div>
          )}
          {role && (
            <div className="text-sm text-gray-600 truncate">
              {role}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
