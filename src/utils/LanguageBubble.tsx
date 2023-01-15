export const LanguageBubble = (lang: any) => {

    const color = {
        "JavaScript": "#f1e05a",
        "TypeScript": "#2b7489",
        "HTML": "#e34c26",
        "CSS": "#563d7c",
        "Python": "#3572A5",
        "Java": "#b07219",
        "C#": "#178600",
        "C++": "#f34b7d",
        "C": "#555555",
        "PHP": "#4F5D95",
        "Shell": "#89e051",
        "Ruby": "#701516",
        "Go": "#00ADD8",
        "Rust": "#dea584",
        "Swift": "#ffac45",
        "Kotlin": "#F18E33",
        "Dart": "#00B4AB",
        "Objective-C": "#438eff",
        "Scala": "#c22d40",
        "Groovy": "#e69f56",
        "Perl": "#0298c3",
        "Haskell": "#5e5086",
        "Lua": "#000080",
    }

    const a = lang

    return (
        <div>
            {/* <style jsx>{`
                .repo-language-color {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color: ${color[lang]};
                }
            `}</style> */}

            <span className="repo-language-color ml-0 mr-1" id="JavaScript" />
        </div>
    )
}

