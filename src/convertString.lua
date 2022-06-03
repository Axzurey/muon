local function formatStr(str)
    local _PATTERN_1 = "%S*%a*%b[]%a*"
    local matched = {}
    for m in string.gmatch(str, _PATTERN_1) do
        table.insert(matched, m)
    end 

    local nextStr = string.gsub(str, _PATTERN_1, "")
    for m in string.gmatch(nextStr, "%S+") do
        table.insert(matched, m)
    end
    
    table.sort(matched, function(a, b)
        local s0, e0 = string.find(str, string.gsub(a, "([^%w])", "%%%1"))
        local s1, e1 = string.find(str, string.gsub(b, "([^%w])", "%%%1"))
        
        return (s0 < s1) and (e0 < e1)
    end)

    return matched
end

return formatStr