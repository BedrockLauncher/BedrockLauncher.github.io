export interface IFAQItem {
  id: string
  tag: string
  title: string
  body: string
}

export const FAQCategories = [
  { 
    name: 'versions',
    title: 'Versions FAQ',
    description: "Can't find what you're looking for, try looking here.",
    img: '%PUBLIC_PATH%/images/banners/other_early_console_era.jpg'
  },
  {
    name: 'data',
    title: 'Data FAQ',
    description: "Issues with your Minecraft worlds, settings, etc?",
    img: '%PUBLIC_PATH%/images/banners/1.13_technically_updated_java.jpg'
  },
  {
    name: 'accounts',
    title: 'Accounts FAQ',
    description: "Questions about managing Minecraft accounts?",
    img: '%PUBLIC_PATH%/images/banners/1.09_combat_update_java.jpg'
  },
  {
    name: 'misc',
    title: 'Miscellaneous FAQ',
    description: "Issues with your Minecraft worlds, settings, etc?",
    img: '%PUBLIC_PATH%/images/banners/1.08_cats_and_pandas.jpg'
  }
]

const FAQs: IFAQItem[] = [
  {
    id: 'faq-b751e93b',
    tag: 'versions',
    title: 'What versions can I access?',
    body: `<p>You can access most of the versions available for download by the Microsoft Store. We are aware that some versions are missing, and we are working on it.</p>`
  },
  {
    id: 'faq-ab59111b',
    tag: 'versions',
    title: 'Where is the latest release/beta?',
    body: `<p>They can be found in the quick launch prompt:</p><img src="%PUBLIC_PATH%/images/version_chooser.png">`
  },
  {
    id: 'faq-560145e1',
    tag: 'misc',
    title: "Why isn't my language supported?",
    body: `<p>We are only a small team of 2 people, and it is hard for us to translate a whole launcher. That's why, we are asking for you help! Visit our <a rel="noreferrer" href="https://github.com/BedrockLauncher/BedrockLauncher" target='_blank'>repository</a> and create a fork with your translations.</p>`
  },
  {
    id: 'faq-7a94776d',
    tag: 'misc',
    title: 'How can I help out in this project?',
    body: `<p>Visit our repositories under the <a rel="noreferrer" href="https://github.com/BedrockLauncher/BedrockLauncher" target='_blank'>Bedrock Launcher</a> GitHub organization. Create a fork, make changes, and pull requests!</p>`
  },
  {
    id: 'faq-36d48bd3',
    tag: 'misc',
    title: 'Why is windows protector blocking the installer?',
    body: `<p>This application is very new, and Windows Defender isn't sure about us yet. As more people use our launcher, Windows will stop prompting people as it will recognize us as not a threat.</p>`
  },
  {
    id: 'faq-65c7b97c',
    tag: 'misc',
    title: 'What platforms does this work on?',
    body: `<p>Only Windows 10 for now. (Windows 11 too if Minecraft works on it)</p>`
  },
  {
    id: 'faq-683525c9',
    tag: 'accounts',
    title: 'How do I log in with my accounts?',
    body: `<h5 class="subtle">Creating an account on first launch</h5><p>When launching the launcher for the first time, you'll be greeted with this screen:</p><img src="%PUBLIC_PATH%/images/first_launch_welcome.png"><p>Click next.</p><img src="%PUBLIC_PATH%/images/first_launch_one_thing.png"><p>Click next once more and then choose an account you desire to use to launcher Minecraft (this account should own Minecraft For Windows 10). Then click next.</p><img src="%PUBLIC_PATH%/images/first_launch_insider_account.png"><img src="%PUBLIC_PATH%/images/first_launch_almost_there.png"><p>And just like that, you have created an account in your first launch!</p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher.png"><br><br><br><h5 class="subtle">Creating an account after first launch</h5><p>Click on the profiles button.</p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher_click.png"><p>Then click add profile.</p><img src="%PUBLIC_PATH%/images/add_profile_button.png"><p>You'll be then greeted by this screen:</p><img src="%PUBLIC_PATH%/images/add_profile_prompt.png"><p>Type in your desired name and click "CREATE"; In this example, I created a profile called <code>Abhi's New Profile</code>. Now click on the profiles button again, and voila, your new profile is ready!</p><img src="%PUBLIC_PATH%/images/new_profile_added.png">`
  },
  {
    id: 'faq-8aa21b40',
    tag: 'accounts',
    title: 'Can I play Minecraft without owning it?',
    body: `<p>No, you can't! You'll have to own a copy of <a rel="noreferrer" href="https://www.microsoft.com/p/p/9nblggh2jhxj" target='_blank'>Minecraft For Windows 10</a> from the <a rel="noreferrer" href="https://www.microsoft.com/" target='_blank'>Microsoft Store</a>.</p>`
  },
  {
    id: 'faq-8c9c0b49',
    tag: 'accounts',
    title: 'How do I play Minecraft Betas?',
    body: `<p>To play a beta, you can either create a custom installation for a specific beta version or play the Latest Beta version provided by default in the launcher.</p><img src="%PUBLIC_PATH%/images/latest_beta.png">`
  },
  {
    id: 'faq-bdef087b',
    tag: 'accounts',
    title: 'Can I use this launcher with my Minecraft Java account?',
    body: `<p>If your Java account has been migrated to a Microsoft account in which Minecraft for Windows 10 edition is owned, then yes, you can play using that account.</p>`
  },
  {
    id: 'faq-218e243e',
    tag: 'accounts',
    title: "Why isn't my Windows Accounts Showing up as Insider Accounts?",
    body: `<p>Check your Web Accounts and make sure that your accounts are registered to your machine.</p>`
  },
  {
    id: 'faq-16bd7856',
    tag: 'data',
    title: 'Why did my worlds disappear?',
    body: `<p>If you had Minecraft worlds already created on your PC before installing the launcher, those worlds should have been moved to a separate folder for security reasons. You can find those folders here:</p><p><code>%userprofile%\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang</code></p><p>In here, you'll find two folders:</p><img src="%PUBLIC_PATH%/images/two_folders_after_installation.png"><p>Minecraft accesses <code>com.mojang</code> (for settings, worlds, skins, etc..) by default which gets renamed to <code>com.mojang.default</code> during the installation of Bedrock Launcher.</p><p>To continue using the default installation of Minecraft (from the Microsoft Store), delete the <code>com.mojang</code> folder link and rename <code>com.mojang.default</code> to <code>com.mojang</code>.</p><p>To use the launcher with the Minecraft worlds from before, create a profile in the launcher, download a version, and play. This will create a folder with your profile name in it, and can be found here:</p><p><code>%userprofile%\\AppData\\Roaming\\.minecraft_bedrock\\installations</code></p><p>For example, mine is called <code>CoolAbhi1290</code></p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_folder.png"><br><br><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher.png"><p>And inside of this folder will be the folders of your installations. For example, mine are these:</p><img src="%PUBLIC_PATH%/images/version_folders.png"><p>These folders house data of your installations (inside of <code>packageData</code>). Simply move the contents of <code>com.mojang.default</code> to any of these folder's <code>packageData</code> folder to continue playing Minecraft with your worlds.</p>`
  },
  {
    id: 'faq-fcbf3cda',
    tag: 'data',
    title: 'Why do my worlds not show up sometimes?',
    body: `<p>When you create a profile in the launcher, download a version, and play it, a folder is created with your profile name in it, and can be found here:</p><p><code>%userprofile%\\AppData\\Roaming\\.minecraft_bedrock\\installations</code></p><p>For example, mine is called <code>CoolAbhi1290</code></p><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_folder.png"><br><br><img src="%PUBLIC_PATH%/images/coolabhi1290_profile_in_launcher.png"><p>And inside of this folder will be the folders of your installations. For example, mine are these:</p><img src="%PUBLIC_PATH%/images/version_folders.png"><p>These folders house data of your installations (inside of <code>packageData</code>). Simply move the contents of <code>com.mojang.default</code> to any of these folder's <code>packageData</code> folder to continue playing Minecraft with your worlds.</p><p>So, installations can only access data from their assigned folders. However, there is a way of accessing the same worlds from the same folder, and can be done so by reading the "How can I access my same worlds in different installations?"</p>`
  },
  {
    id: 'faq-e812fef1',
    tag: 'data',
    title: 'How do I transfer my worlds between versions?',
    body: `<p>Read the "Why do my worlds not show up sometimes?" FAQ to understand how certain insallations access certain folders.</p><p>It's pretty straight-forward, just move the world folders, which can be found in <code>/packageData/minecraftWorlds/</code> to a different installation folder.</p>`
  },
  {
    id: 'faq-edd0bda2',
    tag: 'data',
    title: 'How can I access my same worlds in different installations?',
    body: `<p>Read the "Why do my worlds not show up sometimes?" FAQ to understand how certain insallations access certain folders.</p><p>Pick an installation folder that you desire all versions to access. For example, I created a folder called <code>Abhi's Worlds</code> and transfered all my worlds to it.</p><img src="%PUBLIC_PATH%/images/custom_installation_folder.png"><p>Now, go to the installations tab</p><img src="%PUBLIC_PATH%/images/installations_tab.png"><p>Click the three dots (to open installation configurations)</p><img src="%PUBLIC_PATH%/images/installations_settings.png"><p>In the <code>DIRECTORY</code> input, type in your folder's name. In my case, it is <code>Abhi's Folders</code>.</p><img src="%PUBLIC_PATH%/images/installation_directory.png"><p>Finally, click save!</p><img src="%PUBLIC_PATH%/images/installation_save.png"><p>Repeat this proccess for each version that you want to be able to access those worlds. In my case, I did it for all versions to mimic Minecraft Java's behaviour.</p>`
  },
  {
    id: 'faq-dfc054d7',
    tag: 'data',
    title: 'Why do my settings keep resetting?',
    body: `<p>The main reason behind this could be the same as what happens with the Minecraft Java Launcher: different versions parse settings diffrently, and reset some as they see fit. There is nothing you can do about this.</p><p>One other contributing reason could be that different installations are accessing different insallation folders with diffrent settings. Read "Why do my worlds not show up sometimes?" for more info.</p>`
  }
]

export default FAQs