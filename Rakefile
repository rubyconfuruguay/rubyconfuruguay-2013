desc "Create a new post, in Spanish and English."
task :new_post, :author, :title do |t, args|
  post = <<-HTML
---
layout: post
title: TITLE
lang: LANG
author: AUTHOR
---
HTML

  title = args[:title]
  author = args[:author]

  post.gsub!("AUTHOR", args[:author]).gsub!("TITLE", title)

  ["en", "es"].each do |lang|
    filename = "#{Time.new.strftime('%Y-%m-%d')}-#{title.downcase.gsub(/\s/,'-')}-#{lang}.markdown"
    post_path = File.join("_posts", filename)
    File.open(post_path, 'w') do |f|
      f.puts post.gsub("LANG", lang)
    end
  end

end
