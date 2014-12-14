require 'date'

desc 'create a new post'
task :post, :title do |t, args|
  title = get_title args.title
  slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"
  file = file_path '_posts', slug
  create_and_open_post file, title
end

desc 'create a new draft post'
task :draft, :title do |t, args|
  title = get_title args.title
  slug = title.downcase.gsub(/[^\w]+/, '-')
  file = file_path '_drafts', slug
  create_and_open_post file, title
end

def create_and_open_post path, title
  ask_abort_if_file_exist path
  write_front_matter path, title
  `open #{path}`
end

def get_title args_title
  return args_title if args_title
  get_stdin("Enter a title for your post: ")
end

def ask_abort_if_file_exist file
  if File.exist?(file)
    abort("rake aborted!") if ask("#{file} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def write_front_matter file, title
  File.open(file, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    categories:
    ---

    EOS
  end
end

def file_path folder, filename
  File.join(File.dirname(__FILE__), folder, filename + '.md')
end

def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end