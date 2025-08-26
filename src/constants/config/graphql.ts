export const GET_PROFILE_GITHUB = `
  {
    viewer {
      login
      name
      avatarUrl
      bio
      followers { totalCount }
      following { totalCount }
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        totalRepositoryContributions
        contributionCalendar {
        weeks {
          contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`
