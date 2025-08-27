export interface MonkeyType {
	data: MonkeyUserType
	message: string
}

export interface MonkeyUserType {
	uid: string
	name: string
	banned: boolean
	addedAt: number
	discordId: string
	discordAvatar: string
	xp: number
	lbOptOut: boolean
	isPremium: boolean
	inventory: Record<string, unknown>
	allTimeLbs: Record<string, unknown>
	testActivity: Record<string, unknown>
	typingStats: TypingStatsType
	personalBests: PersonalBestType
	streak: number
	maxStreak: number
	details: Record<string, PersonalBestItemType[]>
}

export interface TypingStatsType {
	completedTests: number
	startedTests: number
	timeTyping: number
}

export interface PersonalBestType {
	time: Record<string, PersonalBestItemType[]>
	words: Record<string, PersonalBestItemType[]>
}

export interface PersonalBestItemType {
	acc: number
	consistency: number
	difficulty: string
	lazyMode: boolean
	language: string
	punctuation: boolean
	numbers: boolean
	raw: number
	wpm: number
	timestamp: number
}

export interface DetailsType {
	bio: string
	keyboard: string
	socialProfiles: {
		twitter: string
		github: string
		website: string
	}
	showActivityOnPublicProfile: boolean
}
