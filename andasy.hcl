# andasy.hcl app configuration file generated for nieddy on Friday, 21-Nov-25 10:21:31 SAST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "nieddy"

app {

  env = {}

  port = 8080

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "nieddy"
  }

}
