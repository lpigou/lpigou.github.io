guard 'jekyll-plus', :serve => true do
  ignore /^_site/
end

guard :shell do
  watch /.*/ do |m|
    m[0] + " has changed."
    `jekyll build`
  end
end

guard 'livereload'do
   ignore /^_site/
   watch /.*/
end